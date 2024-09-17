import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

const ErrorPage = () => {
  return (
    <div className="flex flex-1 justify-center items-center h-screen flex-col gap-4 text-gray-500">
      <h1 className="text-4xl md:text-8xl font-bold tracking-widest">404</h1>
      <h3 className="text-2xl md:text-4xl">Page you are looking for does not exist</h3>
      <Button>
        <Link to={'/'} className="text-xl md:text-2xl">Go back to home</Link>
      </Button>
    </div>
  )
}

export default ErrorPage;
