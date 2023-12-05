import Link from 'next/link';

const Pagination = ({ currentPage, totalPages }) => {
  const generatePageNumbers = () => {
    const numbers = [];
    for (let i = 1; i <= totalPages; i++) {
      numbers.push(i);
    }
    return numbers;
  };

  return (
    <div className='flex gap-4 sm:px-8 px-40 2xl:px-56 sm:pb-8 pb-16'>
      {currentPage > 1 ? (
        <Link href={`/cloning-news?page=${currentPage - 1}`} legacyBehavior>
          <a>&lt;</a>
        </Link>
      ) : (
        <div className='opacity-50'>&lt;</div>
      )}

      {generatePageNumbers().map((pageNumber) => (
        <Link
          key={pageNumber}
          href={`/cloning-news?page=${pageNumber}`}
          legacyBehavior
        >
          <a className={pageNumber === currentPage ? 'font-bold' : ''}>
            {pageNumber}
          </a>
        </Link>
      ))}

      {currentPage < totalPages ? (
        <Link href={`/cloning-news?page=${currentPage + 1}`} legacyBehavior>
          <a>&gt;</a>
        </Link>
      ) : (
        <div className='opacity-50'>&gt;</div>
      )}
    </div>
  );
};

export default Pagination;
