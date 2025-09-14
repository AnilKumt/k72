import React from 'react'

const Video = () => {
  return (
    <div>
        <video className='h-full w-full object-cover' autoPlay loop muted src='https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1757807602~exp=1757811202~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=7403f0db19dc0547e285578262a2b5cdb77e469d68b812b6f03408e4e46d48b2&r=dXMtd2VzdDE%3D'>
        </video>
    </div>
  )
}

export default Video