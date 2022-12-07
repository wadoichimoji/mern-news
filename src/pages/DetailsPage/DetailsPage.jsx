export default function DetailsPage({ story }) {
  return (
    <>
      <h1>{story.title}</h1>
      <img src={story.urlToImage} />
      <div>{story.source.name}</div>
      <div>{story.description}</div>
      <div>{story.content}</div>
    </>
  );
}
