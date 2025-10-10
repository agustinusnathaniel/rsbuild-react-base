import { useNavigate } from '@tanstack/react-router';

const Page404 = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => navigate({ to: '/' });

  return (
    <div>
      <h1>Page not Found</h1>

      <div>
        <img alt="404" width={400} src="/assets/404 Error-rafiki.svg" />
        <a
          href="https://stories.freepik.com/web"
          target="_blank"
          rel="noopener noreferrer"
        >
          Illustration by Freepik Stories
        </a>
      </div>

      <div>
        <p>It&apos;s Okay!</p>
        <button type="button" onClick={handleBackToHome}>
          Let&apos;s Head Back
        </button>
      </div>
    </div>
  );
};

export default Page404;
