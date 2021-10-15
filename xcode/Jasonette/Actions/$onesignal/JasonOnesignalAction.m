//
//  JasonOnesignalAction.m
//  Jasonette
//
//  Copyright © 2017 Jasonette. All rights reserved.
//
#import "JasonOnesignalAction.h"
#import "JasonLogger.h"
#import <OneSignal/OneSignal.h>

@implementation JasonOnesignalAction

- (void)set{

    if (self.options) {
        NSString * externalid = self.options[@"externalid"];

        if (externalid) {
            DTLogInfo (@"Called $onesignal.set with options %@", self.options);
            [OneSignal setExternalUserId:externalid];
            [[Jason client] success];
        }
        else {
            [[Jason client] error];
        }
    }
    else {
        [[Jason client] error];
    }
}

@end
