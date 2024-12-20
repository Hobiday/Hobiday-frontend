interface FeedThumbnail {
  feedId: number;
  imageUrl: string; // 첫 번째 사진만 사용
}

interface feedThumbnailProps {
  myFeeds: FeedThumbnail[];
}

export default function ProfileFeed({ myFeeds }: feedThumbnailProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
      {myFeeds.map((feed) => (
        <div key={feed.feedId} className="overflow-hidden">
          <img src={feed.imageUrl} alt={`feed.${feed.feedId}`} className="w-36 h-36 object-cover" />
        </div>
      ))}
    </div>
  );
}
