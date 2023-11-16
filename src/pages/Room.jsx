"use client"
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import {
  RedirectToSignIn,
  SignedIn,
  SignedOut,
  useUser,
} from "@clerk/clerk-react";

const Room = () => {
  const { roomId } = useParams();
  const { user } = useUser();
  let myMeeting = (element) => {
    const appId = parseInt(import.meta.env.VITE_ZEGOCLOUD_APPID);
    const serverSecret = import.meta.env.VITE_ZEGOCLOUD_SERVER_SECRET;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serverSecret,
      roomId,
      user?.id, // userId
      user.fullName ?? user.firstName ?? user.lastName, // username
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      turnOnMicrophoneWhenJoining: true,
      turnOnCameraWhenJoining: true,
      showMyCameraToggleButton: true,
      showMyMicrophoneToggleButton: true,
      showAudioVideoSettingsButton: true,
      showScreenSharingButton: true,
      showTextChat: true,
      showUserList: true,
      maxUsers: 50,
      layout: "Grid",
      showLayoutButton: true,
      sharedLinks: [
        {
          name: "Copy url",
          url: `${window.location.href}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall,
      },
    });
  };

  return (
    <div className=" h-screen w-full overflow-hidden ">
      <SignedIn>
        <div ref={myMeeting} className="w-full h-full"></div>;
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
};

export default Room;
