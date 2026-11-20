uniform vec2 currentRepeat;
        uniform vec2 currentOffset;
        uniform vec2 nextRepeat;
        uniform vec2 nextOffset;
        uniform float direction;
        #define texCurrent(uv) texture2D(currentImage, (uv) * currentRepeat + currentOffset)
        #define texNext(uv) texture2D(nextImage, (uv) * nextRepeat + nextOffset)
