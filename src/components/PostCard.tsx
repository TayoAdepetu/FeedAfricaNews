import PostCardBase from "./PostCardBase";

type Props = React.ComponentProps<typeof PostCardBase>;

export default function PostCard(props: Props) {
  return (
    <PostCardBase
      {...props}
      variant="vertical"
    />
  );
}
