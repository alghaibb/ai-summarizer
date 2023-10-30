import { useState, useEffect } from 'react';
import { copy, linkIcon, loader, tick } from '../assets';
import { useLazyGetSummaryQuery } from '../services/article';

// Main demo component for article summarization.
const Demo = () => {
  // Local state for tracking the article URL and its summary.
  const [article, setArticle] = useState({
    url: '',
    summary: '',
  });

  // Local state to hold all articles that have been processed (summarized or searched).
  const [allArticles, setAllArticles] = useState([]);

  // State for tracking which URL has recently been copied to the clipboard.
  const [copied, setCopied] = useState('');

  // Hook for triggering the getSummary API call lazily and manage its state.
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  // Load articles from local storage on component mount.
  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(localStorage.getItem('articles'));
    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  // Handle the submission of the URL form.
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary }
      const updatedAllArticles = [newArticle, ...allArticles];
      setArticle(newArticle);
      setAllArticles(updatedAllArticles);
      // Store the updated list of articles in local storage.
      localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
    }
  }

  // Handle copying a URL to clipboard.
  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    // Reset the copied state after a delay.
    setTimeout(() => setCopied(false), 3000);
  }

  return (
    <section className='mt-16 w-full max-w-xl'>
      <div className='flex flex-col w-full gap-2'>
        {/* Form for inputting the article URL */}
        <form className='relative flex justify-center items-center' onSubmit={handleSubmit}>
          <img src={linkIcon} alt="link_icon" className='absolute left-0 my-2 ml-3 w-5' />
          <input type="url" placeholder='Enter a URL' value={article.url} onChange={(e) => setArticle({ ...article, url: e.target.value })} required className='url_input peer' />
          <button type='submit' className='submit_btn peer-focus:border-gray-700 per-focus:text-gray-700'>↵</button>
        </form>

        {/* Display list of previously searched articles */}
        {allArticles.length > 0 && (
          <>
            <div className='mt-6 mb-6 flex items-center'>
              <h2 className='font-satoshi font-bold text-gray-600 text-xl mr-2'>Previously</h2>
              <div className='flex items-center'>
                <div className='blue_gradient font-satoshi font-bold text-xl'>Searched:</div>
              </div>
            </div>

            {/* Map over all articles and display each one */}
            {allArticles.map((item, index) => (
              <div key={`link-${index}`} onClick={() => setArticle(item)} className='link_card'>
                <div className='copy_btn' onClick={() => handleCopy(item.url)}>
                  <img src={copied === item.url ? tick : copy} alt="copy_icon" className='w-[40%] h-[40%] object-contain' />
                </div>
                <p className='flex-1 font-satoshi text-blue-700 font-medium text-sm truncate hover:text-blue-900 transition-all duration-300 ease-in-out hover:underline'>
                  {item.url}
                </p>
              </div>
            ))}
          </>
        )}
      </div>

      <div className='my-10 max-w-full flex justify-center items-center'>
        {/* Display loader while fetching */}
        {isFetching ? (
          <img src={loader} alt='loader' className='w-20 h-20 object-contain' />
        ) : error ? (
          // Display error if there is one.
          <p className='font-inter font-bold text-black text-center'>Unexpected hiccup. Let's try that again!<br /><span className='font-satoshi font-normal text-gray-700'>{error?.data?.error}</span></p>
        ) : (
          // Display the article summary if available.
          article.summary && (
            <div className='flex flex-col gap-3'>
              <h2 className='font-satoshi font-bold text-gray-600 text-xl'>Article <span className='blue_gradient'>Summary</span></h2>
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

export default Demo;
