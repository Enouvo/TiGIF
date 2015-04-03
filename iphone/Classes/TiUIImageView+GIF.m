//
//  TiUIImageView+GIF.m
//  com.enouvo.tigif
//
//  Created by Duy Bao Nguyen on 3/04/2015.
//
//

#import "FLAnimatedImage.h"
#import "TiUIImageView+GIF.h"

@implementation TiUIImageView (GIF)

-(void)setGif_:(id)arg
{
    NSLog(@"Args: %@", arg);
    
    FLAnimatedImage *image = [FLAnimatedImage animatedImageWithGIFData:[NSData dataWithContentsOfURL:[TiUtils toURL:arg proxy:self.proxy]]];
    
    FLAnimatedImageView *gif = [[FLAnimatedImageView alloc] init];
    gif.animatedImage = image;
    
    [self addSubview:gif];
}

@end
