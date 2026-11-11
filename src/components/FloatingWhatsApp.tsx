"use client";

import { useEffect, useState } from "react";
import { WhatsAppLink } from "./WhatsAppLink";

/** Botão fixo que só aparece depois que o botão principal do topo sai da tela. */
export function FloatingWhatsApp({ watchId }: { watchId: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById(watchId);
    if (!target || !("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0));
    io.observe(target);
    return () => io.disconnect();
  }, [watchId]);

  return (
    <div className="wa-float-wrap" data-visible={visible}>
      <WhatsAppLink source="flutuante" className="wa-float" ariaLabel="Conversar no WhatsApp">
        <span className="wa-float-label">WhatsApp</span>
      </WhatsAppLink>
    </div>
  );
}
