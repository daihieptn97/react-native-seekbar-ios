#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(SeekbarIos, RCTViewManager)
RCT_EXPORT_VIEW_PROPERTY(thumbColor, UIColor)
RCT_EXPORT_VIEW_PROPERTY(seekBarColor, UIColor)
RCT_EXPORT_VIEW_PROPERTY(currentAngle, float)
RCT_EXPORT_VIEW_PROPERTY(startAngle, float)
RCT_EXPORT_VIEW_PROPERTY(endAngle, float)
RCT_EXPORT_VIEW_PROPERTY(maxVal, int)
RCT_EXPORT_VIEW_PROPERTY(minVal, int)

RCT_EXPORT_VIEW_PROPERTY(onUpdate, RCTDirectEventBlock)
RCT_EXPORT_VIEW_PROPERTY(onComplete, RCTDirectEventBlock)
@end
