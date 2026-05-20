import { EditRecipe } from "@/lib/types";

interface Props {
  recipe: EditRecipe;
  onChange: (updates: Partial<EditRecipe>) => void;
}

const FILTERS = [
  { id: "none", label: "None", css: "bg-gradient-to-tr from-rose-400 to-orange-300" },
  { id: "grayscale", label: "Gray", css: "bg-gradient-to-tr from-gray-400 to-gray-500 grayscale" },
  { id: "sepia", label: "Sepia", css: "bg-gradient-to-tr from-[#9e7452] to-[#cba37a] sepia" },
  { id: "vintage", label: "Vintage", css: "bg-gradient-to-tr from-[#6b4c3a] to-[#d4b595] contrast-75 sepia-[.5]" },
  { id: "cool", label: "Cool", css: "bg-gradient-to-tr from-cyan-400 to-blue-500" },
  { id: "warm", label: "Warm", css: "bg-gradient-to-tr from-orange-400 to-red-400" },
  { id: "high-contrast", label: "Contrast", css: "bg-gradient-to-tr from-zinc-800 to-zinc-900 contrast-125" },
] as const;

export default function ColorFilterControl({ recipe, onChange }: Props) {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-4 gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => onChange({ colorFilter: f.id as EditRecipe["colorFilter"] })}
            className={`flex flex-col items-center gap-1.5 p-1.5 rounded-lg border-2 transition-all ${
              recipe.colorFilter === f.id
                ? "border-film-600 bg-film-50 dark:bg-film-900/20"
                : "border-transparent hover:bg-[var(--border)]"
            }`}
          >
            <div className={`w-full aspect-video rounded-md shadow-inner ${f.css}`} />
            <span className="text-[9px] font-heading font-semibold uppercase tracking-wider text-[var(--text)] text-center">
              {f.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
