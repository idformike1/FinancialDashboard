import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

interface TimeHorizonSliderProps {
    years: number;
    setYears: (years: number) => void;
}

export function TimeHorizonSlider({ years, setYears }: TimeHorizonSliderProps) {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <Label className="text-base font-medium text-muted-foreground">Time Horizon</Label>
                <span className="text-2xl font-bold tabular-nums text-primary">{years} Years</span>
            </div>
            <Slider
                defaultValue={[years]}
                max={30}
                min={1}
                step={1}
                onValueChange={(vals) => setYears(vals[0])}
                className="py-4"
            />
            <div className="flex justify-between text-xs text-muted-foreground">
                <span>1 Year</span>
                <span>15 Years</span>
                <span>30 Years</span>
            </div>
        </div>
    );
}
