import { GlowCard } from "@/components/ui/spotlight-card";

export function GlowCardDemo() {
    return (
        <div className="w-screen h-screen flex flex-row items-center justify-center gap-10 bg-merkurie-background p-8">
            <GlowCard glowColor="merkurie-accent" className="w-64 h-80">
                <div className="text-white p-4">
                    <h3 className="text-xl font-bold mb-2">Merkurie Accent</h3>
                    <p className="text-white/70">Golden glow effect</p>
                </div>
            </GlowCard>

            <GlowCard glowColor="merkurie-coral" className="w-64 h-80">
                <div className="text-white p-4">
                    <h3 className="text-xl font-bold mb-2">Merkurie Coral</h3>
                    <p className="text-white/70">Coral glow effect</p>
                </div>
            </GlowCard>

            <GlowCard glowColor="merkurie-teal" className="w-64 h-80">
                <div className="text-white p-4">
                    <h3 className="text-xl font-bold mb-2">Merkurie Teal</h3>
                    <p className="text-white/70">Teal glow effect</p>
                </div>
            </GlowCard>
        </div>
    );
}; 