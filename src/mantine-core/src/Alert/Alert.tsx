import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme } from '@mantine/theme';
import { Text } from '../Text/Text';
import { Paper } from '../Paper/Paper';
import useStyles from './Alert.styles';

interface AlertProps extends DefaultProps, Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  /** Alert title */
  title?: React.ReactNode;

  /** Alert title and body colors from theme */
  color?: string;

  /** Alert body content */
  children: React.ReactNode;

  /** Box-shadow */
  shadow?: string;
}

export function Alert({
  className,
  title,
  children,
  themeOverride,
  color,
  shadow = 'sm',
  ...others
}: AlertProps) {
  const classes = useStyles({ color, theme: useMantineTheme(themeOverride) });

  return (
    <Paper shadow={shadow} className={cx(classes.alert, className)} {...others}>
      {title && (
        <Text data-mantine-alert-title weight={700} className={classes.title}>
          {title}
        </Text>
      )}

      <div data-mantine-alert-body className={classes.body}>
        {children}
      </div>
    </Paper>
  );
}

Alert.displayName = '@mantine/core/Alert';
