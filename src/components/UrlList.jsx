const UrlList = ({ urls }) => {
    return (
      <div className="mt-6 w-full max-w-lg">
        {urls.length > 0 ? (
          <ul className="space-y-2">
            {urls.map((url) => (
              <li key={url._id} className="flex justify-between items-center bg-gray-800 p-3 rounded-md">
                <a href={`https://url-shortner-api-rplq.onrender.com/${url.shortUrl}`} target="_blank" rel="noopener noreferrer" className="text-blue-400">
                  {url.shortUrl}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400 text-center">No URLs shortened yet.</p>
        )}
      </div>
    );
  };
  
  export default UrlList;