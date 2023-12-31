
const Blog = () => {
    return (
        <div>
            {/* <h2>Blogs</h2> */}

            <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* <img className="w-full" src="/img/blog-post-1.jpg" alt="Blog post" /> */}
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">When Should us Use Context API?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Context API is a powerful feature in React that allows us to pass data and functions down the component tree without having to manually pass them through props. This can be useful for avoiding "prop drilling" and making it easier to share data between components.
            </p>
            {/* <a href="#" className="text-blue-500 hover:underline">Read more</a> */}
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* <img className="w-full" src="/img/blog-post-2.jpg" alt="Blog post" /> */}
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">What is Custom Hook?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Custom hooks are a powerful feature in React that allow us to extract reusable logic from usr components into a separate function. Custom hooks can be used to encapsulate complex logic, share stateful logic between components, or create reusable behaviors that can be shared across different projects.
            </p>
            {/* <a href="#" className="text-blue-500 hover:underline">Read more</a> */}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* <img className="w-full" src="/img/blog-post-3.jpg" alt="Blog post" /> */}
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">What is useMemo? Usage of It.</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              useMemo is a hook in React that allows us to optimize the performance of usr components by memoizing expensive computations. Memoization is a technique where us store the result of a function call so that us can return the same result later without having to recompute it.
            </p>
            {/* <a href="#" className="text-blue-500 hover:underline">Read more</a> */}
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          {/* <img className="w-full" src="/img/blog-post-4.jpg" alt="Blog post" /> */}
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">What is useRef? Usage of It.</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              useRef is a hook in React that allows us to create a mutable reference to a value that persists between renders. useRef can be used to store a reference to a DOM element, create a mutable variable that can be accessed by other hooks, or create a memoized value that persists between renders.
            </p>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Blog;