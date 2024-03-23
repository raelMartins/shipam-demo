import { extendTheme } from '@chakra-ui/react';
import { colors_object } from './colors';

export const current_theme = async (theme_name: keyof typeof colors_object) => {
  'use server';
  return extendTheme({
    colors: colors_object[theme_name] || colors_object.default,
    theme_name
  });
};
