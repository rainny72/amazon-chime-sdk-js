// Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import SimulcastUplinkObserver from './SimulcastUplinkObserver';
import VideoUplinkBandwidthPolicy from './VideoUplinkBandwidthPolicy';

export default interface SimulcastUplinkPolicy extends VideoUplinkBandwidthPolicy {
  /**
   * Adds SimulcastUplinkObserver to observe simulcast encoding
   * resolution layer changes
   */
  addObserver(observer: SimulcastUplinkObserver): void;

  /**
   * Removes SimulcastUplinkObserver
   */
  removeObserver(observer: SimulcastUplinkObserver): void;
}
