import { FC } from 'react';
import { NftContainer, Video, Image } from './Nft.styled';
import { IPFS_RESOLVER } from '../../utils/constants';

type Props = {
  name: string;
  image: string;
  video?: string;
};

export const Nft: FC<Props> = ({ name, video, image }) => (
  <NftContainer>
    {video ? (
      <Video
        controls
        loop
        autoPlay
        onLoadStart={() =>
          (document.getElementsByTagName('video')[0].volume = 0.15)
        }
        src={`${IPFS_RESOLVER}${video}`}
      />
    ) : (
      <Image src={`${IPFS_RESOLVER}${image}`} alt={name} />
    )}
  </NftContainer>
);
