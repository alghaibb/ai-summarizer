import { useState, useEffect } from 'react';
import { copy, linkIcon, loader, tick } from '../assets';
import { useLazyGetSummaryQuery } from '../services/article';

// Demo component for article summarization
const Demo = () => {

  // Local state to store the article's URL and its corresponding summary
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  });

  // State to manage and store all articles that have been summarized or searched.
  const [allArticles, setAllArticles] = useState([]);

  // State to manage the URL that is currently copied to the clipboard.
  // It's set to a string, with its initial state being an empty string.
  const [copied, setCopied] = useState('');

  // Hook to trigger the 'getSummary' API query lazily (i.e., on-demand) 
  // and extract relevant data and status variables
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  // Effect hook to initialize the articles state from local storage when the component mounts
  useEffect(() => {

    // Retrieves the 'articles' item from local storage and parses it into a JavaScript object
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem('articles')
    );

    // If there are articles found in local storage, updates the state with those articles
    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }

  }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount


  // Handles the submission event of the article input form
  const handleSubmit = async (e) => {

    // Prevents the default form submission behavior
    e.preventDefault();

    // Fetches the summary of the article using the `getSummary` API hook 
    // by passing the current article's URL as a parameter
    const { data } = await getSummary({ articleUrl: article.url });

    // Checks if the fetched data contains a summary
    if (data?.summary) {

      // Creates a new article object with the fetched summary
      const newArticle = { ...article, summary: data.summary }

      // Prepends the new article to the beginning of the existing list of all articles
      const updatedAllArticles = [newArticle, ...allArticles];

      // Updates the local state with the new article data
      setArticle(newArticle);

      // Updates the state with the modified list of all articles
      setAllArticles(updatedAllArticles);

      // Stores the updated list of articles as a string in local storage under the key 'articles'
      localStorage.setItem('articles', JSON.stringify
        (updatedAllArticles));
    }
  }

  /**
 * Handles the action of copying a URL to the clipboard.
 * 
 * @param {string} copyUrl - The URL to be copied.
 */
  const handleCopy = (copyUrl) => {

    // Set the currently copied URL to the state.
    setCopied(copyUrl);

    // Use the Web API to write the URL to the user's clipboard.
    navigator.clipboard.writeText(copyUrl);

    // Reset the copied state back to 'false' after a 3-second delay.
    setTimeout(() => setCopied(false), 3000);
  }

  return (
    <section className='mt-16 w-full max-w-xl'>

      {/* Search */}
      <div className='flex flex-col w-full gap-2'>
        <form
          className='relative flex justify-center items-center'
          onSubmit={handleSubmit}>

          <img
            src={linkIcon}
            alt="link_icon"
            className='absolute left-0 my-2 ml-3 w-5' />

          <input
            type="url"
            placeholder='Enter a URL'
            value={article.url}
            onChange={(e) => setArticle({
              ...
              article, url: e.target.value
            })}
            required
            className='url_input peer' />

          <button
            type='submit'
            className='submit_btn peer-focus:border-gray-700 per-focus:text-gray-700'>
            ↵
          </button>

        </form>

        {/* Browse URL history */}
        <div className='flex flex-col gap-1 max-h-60 overflow-y-auto'>

          {/* Previously searched text */}
          <div className='mt-6 mb-6 flex items-center'>
            <h2 className='font-satoshi font-bold text-gray-600 text-xl mr-2'>
              Previously
            </h2>

            <div className='flex items-center'>
              <div className='blue_gradient font-satoshi font-bold text-xl'>
                Searched:
              </div>
            </div>
          </div>

          {allArticles.map((item, index) => (
            <div

              // Copy icons
              key={`link-${index}`}
              onClick={() => setArticle(item)}
              className='link_card'>
              
              {/* Copy button to allow users to copy the article's URL to the clipboard */}
              <div className='copy_btn'
                onClick={() => handleCopy(item.url)}>
                <img

                  // Display a tick icon if the URL is copied, otherwise show the copy icon 
                  src={copied === item.url ? tick : copy}
                  alt="copy_icon"
                  className='w-[40%] h-[40%] object-contain' />
              </div>

              {/* URLs */}
              <p
                className='flex-1 font-satoshi text-blue-700 font-medium text-sm truncate hover:text-blue-900 transition-all duration-300 ease-in-out hover:underline'>
                {item.url}
              </p>

            </div>
          ))}
        </div>

      </div>

      {/* Display results */}
      <div className='my-10 max-w-full flex justify-center items-center'>
        {isFetching ? (
          <img src={loader} alt='loader' className='w-20 h-20 object-contain' />
        ) : error ? (
          <p className='font-inter font-bold text-black text-center'>
            Unexpected hiccup. Let's try that again!
            <br />
            <span className='font-satoshi font-normal text-gray-700'>
              {error?.data?.error}
            </span>
          </p>
        ) : (
          article.summary && (
            <div className='flex flex-col gap-3'>
              <h2 className='font-satoshi font-bold text-gray-600 text-xl'>
                Article <span className='blue_gradient'>Summary</span>
              </h2>
              <div className='summary_box'>
                <p className='font-inter font-medium text-sm text-gray-700'>{article.summary}</p>
              </div>
            </div>
          )
        )}
      </div>

    </section>
  )
}

export default Demo