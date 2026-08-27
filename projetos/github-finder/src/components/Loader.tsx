import { StyledLoader } from './styles/Loader.styled';

export const Loader = () => {
  const circles: null[] = new Array(8).fill(null);
  return (
    <StyledLoader>
      {circles.map((_, index) => (
        <div
          style={{
            transform: `rotate(calc(40deg * ${index}))`,
          }}
          key={index}
        ></div>
      ))}
    </StyledLoader>
  );
};
