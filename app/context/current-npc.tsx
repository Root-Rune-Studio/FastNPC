import { getValue, storeValue } from '@/services/local-storage';
import { NPC } from '@/types/db-schema';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface CurrentNPCContextType {
  currentNPC: Partial<NPC> | null;
  updateCurrentNPC: (updates: Partial<NPC>) => Promise<void>;
  isLoading: boolean;
}

const CurrentNPCContext = createContext<CurrentNPCContextType | undefined>(undefined);

const CURRENT_NPC_KEY = 'currentNPC';

export const CurrentNPCProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentNPC, setCurrentNPC] = useState<Partial<NPC> | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadCurrentNPC();
  }, []);

  const loadCurrentNPC = async () => {
    try {
      const storedNPC = await getValue<Partial<NPC>>(CURRENT_NPC_KEY);
      setCurrentNPC(storedNPC);
    } catch (error) {
      console.error('Error loading current NPC:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateCurrentNPC = async (updates: Partial<NPC>) => {
    const updatedNPC = { ...currentNPC, ...updates };
    setCurrentNPC(updatedNPC);
    await storeValue(CURRENT_NPC_KEY, updatedNPC);
  };

  return (
    <CurrentNPCContext.Provider value={{
      currentNPC,
      updateCurrentNPC,
      isLoading
    }}>
      {children}
    </CurrentNPCContext.Provider>
  );
};

export const useCurrentNPC = () => {
  const context = useContext(CurrentNPCContext);
  if (!context) {
    throw new Error('useCurrentNPC must be used within a CurrentNPCProvider');
  }
  return context;
};