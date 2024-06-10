type VideoPlayerProps = {
  src: string;
  controls?: boolean;
  autoPlay?: boolean;
  loop?: boolean;
}

export default function VideoPlayer(props: VideoPlayerProps) {
  return (
    <video {...props} style={{ maxWidth: '100%'}}>
    </video>
  );
}
