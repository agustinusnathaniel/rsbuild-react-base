import { useNavigate } from '@tanstack/react-router';

const Page404 = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => navigate({ to: '/' });

  return (
    <div>
      <h1>Page not Found</h1>

      <div>
        <img alt="404" src="/assets/404 Error-rafiki.svg" width={400} />
        <a
          href="https://stories.freepik.com/web"
          rel="noopener noreferrer"
          target="_blank"
        >
          Illustration by Freepik Stories
        </a>
      </div>

      <div>
        <p>It&apos;s Okay!</p>
        <button onClick={handleBackToHome} type="button">
          Let&apos;s Head Back
        </button>
      </div>
    </div>
  );
};

export default Page404;
