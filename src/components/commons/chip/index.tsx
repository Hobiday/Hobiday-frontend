import cn from "@/lib/tailwind-cn";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

type ChipState = "default" | "preSelected" | "selected";

const chipVariants = cva(
  "inline-flex justify-center items-center px-3 py-[6px] rounded-lg font-semibold text-sm transition-colors duration-150 cursor-pointer",
  {
    variants: {
      state: {
        default: "bg-white text-gray-700 border border-gray-100 hover:bg-blue-50",
        preSelected: "bg-blue-50 text-gray-700 border border-transparent",
        selected: "bg-primary text-white border-transparent",
      },
    },
    defaultVariants: {
      state: "default",
    },
  },
);

type ChipVariantProps = VariantProps<typeof chipVariants>;

type HtmlChipProps = Pick<ComponentProps<"div">, "onClick" | "className">;

type ChipProps = Omit<ChipVariantProps, "variant"> &
  HtmlChipProps & {
    label: string;
    state?: ChipState;
    withClose?: boolean; // x 버튼 여부
    onClose?: () => void;
    onClick?: () => void;
    className?: string;
  };

export default function Chip({ className, ...props }: ChipProps) {
  const { label, state = "default", withClose = false, onClose, onClick } = props;

  return (
    <div className={cn(chipVariants({ state }), className)} onClick={onClick} {...props}>
      <span>{label}</span>
      {withClose && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose?.();
          }}
          className="ml-2 flex items-center justify-center w-5 h-5 text-gray-500 hover:text-gray-700 active:text-gray-900"
        >
          ×
        </button>
      )}
    </div>
  );
}
