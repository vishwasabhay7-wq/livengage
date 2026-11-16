export function PartnerAppTechReqs({ data }: { data: any }) {
  if (!data?.requirements || data.requirements.length === 0) return null;
  const { title, requirements } = data;

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-background dark:bg-transparent">
      <div className="max-w-4xl mx-auto reveal-on-scroll">
        {title && (
          <h3 className="font-display-sm text-3xl md:text-4xl font-bold mb-10 text-center text-on-surface dark:text-white tracking-tight">
            {title}
          </h3>
        )}
        <div className="bg-surface dark:bg-surface-container-lowest/5 backdrop-blur-xl border border-outline-variant dark:border-white/10 rounded-[32px] overflow-hidden shadow-lg dark:shadow-[0_0_30px_rgba(255,255,255,0.02)] transition-all duration-500 hover:shadow-[0_0_40px_rgba(124,58,237,0.1)]">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-surface-container-low dark:bg-white/5 border-b border-outline-variant/30 dark:border-white/10">
                  <th className="py-5 px-8 font-bold text-sm uppercase tracking-widest text-on-surface-variant dark:text-primary">Component</th>
                  <th className="py-5 px-8 font-bold text-sm uppercase tracking-widest text-on-surface-variant dark:text-[#94A3B8]">iOS Devices</th>
                  <th className="py-5 px-8 font-bold text-sm uppercase tracking-widest text-on-surface-variant dark:text-[#94A3B8]">Android Devices</th>
                </tr>
              </thead>
              <tbody className="font-body-md text-base text-on-background dark:text-[#CBD5E1] divide-y divide-outline-variant/20 dark:divide-white/5">
                {requirements.map((req: any, idx: number) => (
                  <tr key={req.id || idx} className="hover:bg-surface-container-lowest dark:hover:bg-white/5 transition-colors duration-300">
                    <td className="py-5 px-8 font-medium flex items-center gap-3">
                      {req.icon && (
                        <span className="material-symbols-outlined text-[20px] text-primary drop-shadow-md">
                          {req.icon}
                        </span>
                      )}
                      <span className="text-on-background dark:text-white font-semibold">{req.componentName}</span>
                    </td>
                    {req.sharedReq ? (
                      <td className="py-5 px-8" colSpan={2}>{req.sharedReq}</td>
                    ) : (
                      <>
                        <td className="py-5 px-8">{req.iosReq}</td>
                        <td className="py-5 px-8">{req.androidReq}</td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
