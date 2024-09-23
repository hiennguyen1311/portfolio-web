import { useState } from 'react';
import { openAIModels } from '../../configs';

export default function useSettings() {
  const [model, setModel] = useState(openAIModels[0].value);

  return {
    models: openAIModels.map((i) => ({
      title: i.name,
      onClick: () => setModel(i.value),
    })),
    model: openAIModels.find((i) => i.value === model) ?? openAIModels[0],
  };
}
