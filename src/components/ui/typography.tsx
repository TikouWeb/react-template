import React, { forwardRef } from 'react';
import { cn } from '../../lib/utils';

const commonTypographyClasses = 'whitespace-pre-line';

const TypographyH1 = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  (props, ref) => (
    <h1
      {...props}
      ref={ref}
      className={cn(
        commonTypographyClasses,
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        props.className
      )}
    >
      {props.children}
    </h1>
  )
);

TypographyH1.displayName = 'TypographyH1';
export { TypographyH1 };

const TypographyH2 = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  (props, ref) => (
    <h2
      {...props}
      ref={ref}
      className={cn(
        commonTypographyClasses,
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
        props.className
      )}
    >
      {props.children}
    </h2>
  )
);

TypographyH2.displayName = 'TypographyH2';
export { TypographyH2 };

const TypographyH3 = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  (props, ref) => (
    <h3
      {...props}
      ref={ref}
      className={cn(
        commonTypographyClasses,
        'scroll-m-20 text-2xl font-semibold tracking-tight',
        props.className
      )}
    >
      {props.children}
    </h3>
  )
);

TypographyH3.displayName = 'TypographyH3';
export { TypographyH3 };

const TypographyH4 = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  (props, ref) => (
    <h4
      {...props}
      ref={ref}
      className={cn(
        commonTypographyClasses,
        'scroll-m-20 text-xl font-semibold tracking-tight',
        props.className
      )}
    >
      {props.children}
    </h4>
  )
);

TypographyH4.displayName = 'TypographyH4';
export { TypographyH4 };

const TypographyLead = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  (props, ref) => (
    <p
      {...props}
      ref={ref}
      className={cn(commonTypographyClasses, 'text-xl text-muted-foreground', props.className)}
    >
      {props.children}
    </p>
  )
);

TypographyLead.displayName = 'TypographyLead';
export { TypographyLead };

const TypographyBase = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  (props, ref) => (
    <p
      {...props}
      ref={ref}
      className={cn(
        commonTypographyClasses,
        'leading-7 [&:not(:first-child)]:mt-6',
        props.className
      )}
    >
      {props.children}
    </p>
  )
);

TypographyBase.displayName = 'TypographyBase';
export { TypographyBase };

const TypographyLarge = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => (
    <div
      {...props}
      ref={ref}
      className={cn(commonTypographyClasses, 'text-lg font-semibold', props.className)}
    >
      {props.children}
    </div>
  )
);

TypographyLarge.displayName = 'TypographyLarge';
export { TypographyLarge };

const TypographySmall = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>((props, ref) => (
  <p
    {...props}
    ref={ref}
    className={cn(commonTypographyClasses, 'text-sm font-medium leading-none', props.className)}
  >
    {props.children}
  </p>
));

TypographySmall.displayName = 'TypographySmall';
export { TypographySmall };

const TypographyMuted = forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  (props, ref) => (
    <span
      {...props}
      ref={ref}
      className={cn(commonTypographyClasses, 'text-sm text-muted-foreground', props.className)}
    >
      {props.children}
    </span>
  )
);

TypographyMuted.displayName = 'TypographyMuted';
export { TypographyMuted };

const InlineCode = forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  (props, ref) => (
    <code
      {...props}
      ref={ref}
      className={cn(
        commonTypographyClasses,
        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
        props.className
      )}
    >
      {props.children}
    </code>
  )
);

InlineCode.displayName = 'InlineCode';
export { InlineCode };

const List = forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>((props, ref) => (
  <ul
    {...props}
    ref={ref}
    className={cn(commonTypographyClasses, 'my-6 ml-6 list-disc [&>li]:mt-2', props.className)}
  >
    {props.children}
  </ul>
));

List.displayName = 'List';
export { List };

const Quote = forwardRef<HTMLQuoteElement, React.HTMLAttributes<HTMLQuoteElement>>((props, ref) => (
  <blockquote
    {...props}
    ref={ref}
    className={cn(
      commonTypographyClasses,
      'mt-6 border-l-2 pl-6 italic text-muted-foreground',
      props.className
    )}
  >
    {props.children}
  </blockquote>
));

Quote.displayName = 'Quote';
export { Quote };
