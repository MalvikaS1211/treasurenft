const News = () => {
  return (
    <div className="marquee-div">
      <marquee className="marquee-msg">
        {/* Big Update! Your NFT buying power just got a boost — the daily limit has
        been increased for all subscribers! More buys, more chances, more
        collectibles. Let the collecting begin! */}
        {/* Important Update : NFT Trading Limit Time Change We’re updating our NFT
        trading limit time to better serve our global community. Effective
        immediately, the new trading limit time will be changed from 4:30 AM to
        12:00 AM (midnight), Australia time (AEST). This change is aimed at
        improving accessibility and providing a smoother trading experience for
        all users. */}
        Important Notice – NFT Package Creation Temporarily Paused Please do not
        create any new NFT packages between 27th May 2025 to 28th May 2025. The
        system will be undergoing updates during this period. We appreciate your
        patience and cooperation. Wait for further official announcements before
        resuming NFT creation. Thank you, Team Magic Verse
      </marquee>
    </div>
  );
};

export default News;
