import cn from "@/lib/tailwind-cn";
import Image from "next/image";
import { ReactNode } from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return <div className={cn("flex p-4 border border-gray-200 rounded-lg", className)}>{children}</div>;
}

type CardImageProps = {
  src: string;
  alt: string;
  width: string;
  height: string;
  className?: string;
};

function CardImage({ src, alt, width, height, className }: CardImageProps) {
  return (
    <div
      className={cn(
        `flex-shrink-0 relative ${width} ${height} mr-4 bg-white border border-gray-200 rounded-lg overflow-hidden`,
        className,
      )}
    >
      <Image src={src} alt={alt} fill className="object-contain" />
    </div>
  );
}

type CardContentProps = {
  children: ReactNode;
  className?: string;
};

function CardContent({ children, className }: CardContentProps) {
  return <div className={cn("flex flex-col justify-center min-w-0", className)}>{children}</div>;
}

type CardCategoryProps = {
  children: ReactNode;
  className?: string;
};

function CardCategory({ children, className }: CardCategoryProps) {
  return <div className={cn("mb-2", className)}>{children}</div>;
}

type CardTitleProps = {
  children: string;
  className?: string;
};

function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3 className={cn("text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis", className)}>
      {children}
    </h3>
  );
}

type CardInfoProps = {
  iconSrc?: string;
  info: string;
  className?: string;
};

function CardInfo({ iconSrc, info, className }: CardInfoProps) {
  return (
    <div className={cn("flex items-center mt-1 text-xs text-gray-500", className)}>
      {iconSrc && (
        <div className="flex-shrink-0 w-4 h-4 mr-2">
          <Image src={iconSrc} alt="icon" width={16} height={16} className="w-full h-full object-contain" />
        </div>
      )}
      <span className="inline-block whitespace-nowrap overflow-hidden text-ellipsis">{info}</span>
    </div>
  );
}

Card.Image = CardImage;
Card.Content = CardContent;
Card.Category = CardCategory;
Card.Title = CardTitle;
Card.Info = CardInfo;
