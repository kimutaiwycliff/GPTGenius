import Link from "next/link";

const HomePage = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-primary">GPT Genius</h1>
          <p className="py-6 text-lg leading-loose">
            GPTGenius is a powerful AI tool that can help you write better
            content, faster. It's like having a team of writers at your
            fingertips.
          </p>
          <Link href="/chat" className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
