type CreatePostComposerProps = {
  isLongForm: boolean;
  onToggleLongForm: () => void;
};

export default function CreatePostComposer({
  isLongForm,
  onToggleLongForm,
}: CreatePostComposerProps) {
  return (
    <section className="py-16 px-6 flex justify-center">
      <div className="w-full max-w-2xl space-y-6">
        <h2 className="text-center text-2xl font-medium text-white">
          What topic do you want to create viral content about?
        </h2>

        <div className="relative bg-navy rounded-xl border border-accent p-5 shadow-sm">
          <textarea
            placeholder="Enter your post draft here..."
            className="w-full bg-transparent text-white placeholder-accent resize-none outline-none text-lg"
            rows={5}
          />

          <div className="absolute top-4 right-4">
            <span className="text-sm bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">
              Credits: 2
            </span>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-navy-light hover:bg-primary/20 transition-colors border border-gray-600 hover:border-primary/50">
                📷
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full bg-navy-light hover:bg-primary/20 transition-colors border border-gray-600 hover:border-primary/50">
                🎤
              </button>
            </div>

            <button className="bg-primary hover:bg-primary/90 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors">
              ↑
            </button>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-sm text-accent">Output:</p>

          <div className="flex items-center justify-center gap-4 bg-navy p-3 rounded-lg border border-accent">
            <span
              className={`text-sm ${
                !isLongForm ? "text-white font-medium" : "text-accent"
              }`}
            >
              Short
            </span>
            <button
              onClick={onToggleLongForm}
              className={`w-14 h-7 flex items-center rounded-full p-1 transition-colors ${
                isLongForm ? "bg-primary" : "bg-accent"
              }`}
            >
              <div
                className={`bg-white w-5 h-5 rounded-full transform duration-300 shadow-sm ${
                  isLongForm ? "translate-x-7" : ""
                }`}
              />
            </button>
            <span
              className={`text-sm ${
                isLongForm ? "text-white font-medium" : "text-accent"
              }`}
            >
              Long Form
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
