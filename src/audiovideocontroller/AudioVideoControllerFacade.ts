// Copyright 2019-2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import AudioVideoObserver from '../audiovideoobserver/AudioVideoObserver';
import SimulcastUplinkObserver from '../videouplinkbandwidthpolicy/SimulcastUplinkObserver';

export default interface AudioVideoControllerFacade {
  addObserver(observer: AudioVideoObserver): void;
  removeObserver(observer: AudioVideoObserver): void;
  start(): void;
  stop(): void;
  getRTCPeerConnectionStats(selector?: MediaStreamTrack): Promise<RTCStatsReport>;
  /**
   * Gets available remote attendeeIds with their externalUserIds who have turned their video on.
   */
  getRemoteVideosAvailable(): { attendeeId: string; externalUserId: string }[];

  /**
   * Adds SimulcastUplinkObserver to observe simulcast encoding
   * resolution layer changes
   */
  addSimulcastUplinkPolicyObserver(observer: SimulcastUplinkObserver): void;

  /**
   * Removes SimulcastUplinkObserver
   */
  removeSimulcastUplinkPolicyObserver(observer: SimulcastUplinkObserver): void;
}
