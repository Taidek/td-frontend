import { TRUST_ITEMS } from "@/constants/trustConstants";

export const TrustBar = () => {
  return (
    <section className="w-full border-y border-line bg-surface-4">
      <div className="w-full px-6 py-4 sm:px-10 lg:px-16 xl:px-20 2xl:px-28">
        <div className="border border-line py-2">
          <div className="grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-4">
            {TRUST_ITEMS.map(({ title, description, icon: Icon }) => (
              <div key={title}>
                <div className="flex items-center gap-4">
                  <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center">
                    <Icon
                      size={30}
                      strokeWidth={1.5}
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <p className="font-sans text-base font-normal tracking-[0.22px] text-ink">
                      {title}
                    </p>
                    <p className="mt-1 max-w-[332px] font-sans text-sm font-light leading-snug tracking-[1px] text-ink">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
