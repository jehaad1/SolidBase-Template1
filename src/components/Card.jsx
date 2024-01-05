export default function Card(props) {
  const { title, description, icon, classes, url } = props;
  return (
    <a
      href={url}
      target="_blank"
      className={`
          relative
          flex flex-col items-center
          aspect-square
          p-3 py-2
          rounded-lg
          w-full
          sm:w-fit
          ${classes}`}
    >
      <img
        className="absolute w-1/2 top-1/3"
        src={icon}
      />
      <h1
        className="
        text-white z-10 text-center text-4xl
        font-bold"
      >
        {title}
      </h1>
      <h2
        className="
        text-white
        z-10
        pt-2 px-0.5"
      >
        {description}
      </h2>
    </a>
  );
}
