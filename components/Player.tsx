'use client';

import usePlayer from '@/hooks/usePlayer';
import useLoadSongUrl from '@/hooks/useLoadSongUrl';
import useGetSongById from '@/hooks/useGetSongById';

import PlayerContent from './PlayerContent';

const Player = () => {
  const player = usePlayer();
  const { song } = useGetSongById(player.activeId);

  const songUrl = useLoadSongUrl(song!);

  if (!song || !songUrl || !player.activeId) {
    return null;
  }

  return (
    <div
      className="
        fixed 
        bottom-0 
        bg-black 
        w-full 
        py-2 
        h-[80px] 
        px-4
      "
    >
      {/** 여기서 key는 매우 중요하다.
       * 키를 지정 해 놓아야 훅이 제대로 작동한다 ?
       */}
      <PlayerContent
        key={songUrl}
        song={song}
        songUrl={songUrl}
      />
    </div>
  );
};

export default Player;
