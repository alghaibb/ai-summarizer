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

  // Hook to trigger the 'getSummary' API query lazily (i.e., on-demand) 
  // and extract relevant data and status variables
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

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

      // Updates the local state with the new article data
      setArticle(newArticle);

      // Logs the new article object for debugging purposes
      console.log(newArticle);
    }
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
      </div>

      {/* Display results */}
    </section>
  )
}

export default Demo