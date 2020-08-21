import Foundation
@objc(SeekbarIos)
class SeekbarIos: RCTViewManager {

  override func view() -> UIView! {
    return CircularSeekerView()
  }

  override static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
