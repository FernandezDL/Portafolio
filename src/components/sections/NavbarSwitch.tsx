type NavbarSwitchProps = {
    leftLabel: string;
    rightLabel: string;
    checked: boolean;
    onChange: () => void;
    ariaLabel: string;
    hasScrolled: boolean;
};

export default function NavbarSwitch({leftLabel, rightLabel, checked, onChange, ariaLabel, hasScrolled}: NavbarSwitchProps) {
    return (
        <div className="flex items-center gap-2">
            <span
                className={`${checked ? "font-bold" : ""}
                    ${hasScrolled 
                        ? checked 
                            ? "text-primary" 
                            : "text-white"
                        : checked
                            ? "text-muted"
                            : "text-foreground"
                    }
                `}
            >
              {leftLabel}
            </span>

            <button type="button" role="switch" aria-label={ariaLabel} aria-checked={checked} onClick={onChange}
                    className="relative h-7 w-12 rounded-full border border-border bg-surface transition-colors
                        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                <span aria-hidden="true" className={`absolute top-1/2 size-4 -translate-y-1/2 rounded-full bg-primary
                    transition-transform duration-200 ${checked ? "translate-x-0" : "-translate-x-full"}`}
                />
            </button>

            <span className={checked ? "text-foreground" : "text-muted"}>
                {rightLabel}
            </span>
        </div>
    );
}