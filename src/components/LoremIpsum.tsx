export const LoremIpsum = ({ paragraphs = 1 }) => {
  const colors = [
    '#ff0000',
    '#00ff00',
    '#0000ff',
    '#ffff00',
    '#00ffff',
    '#ff00ff',
  ];
  return (
    <div>
      {Array.from({ length: paragraphs }, (_, k) => k + 1).map(paragraph => (
        <p
          key={paragraph}
          style={{
            marginTop: '1rem',
            color: colors[paragraph % colors.length],
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </p>
      ))}
    </div>
  );
};
