'use client';
import { useState } from 'react';

const CourseSearch = ({ getSearchResults }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/courses/search?query=${query}`);
    const courses = await res.json();
    getSearchResults(courses);
  };

  return (
    <>
 
    <form onSubmit={handleSubmit} className=" search-form p-4 rounded-md bg-white flex items-center">
    <label for="simple-search" className="sr-only">Search</label>
    <div className=" w-full me-4">
       
        <input
      id="simple-search"
        type='text'
       className= "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder='Search Courses...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
    <button className="bg-black hover:bg-gray-800 py-2 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer" type='submit'>
        Search
    </button>
</form>

    </>
  );
};
export default CourseSearch;
