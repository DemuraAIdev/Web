/* eslint-disable prettier/prettier */
import { Group, Button } from '@mantine/core'
import { showNotification } from '@mantine/notifications'
export default function Notif() {
  return (
    <Group position="center">
      <Button
        variant="outline"
        onClick={() =>
          showNotification({
            title: 'Change Log',
            message: ' Website Update 2.3 🎉',
            styles: (theme) => ({
              root: {
                backgroundColor: theme.colors.blue[6],
                borderColor: theme.colors.blue[6],

                '&::before': { backgroundColor: theme.white },
              },

              title: { color: theme.white },
              description: { color: theme.white },
              closeButton: {
                color: theme.white,
                '&:hover': { backgroundColor: theme.colors.blue[7] },
              },
            }),
          })
        }
      >
        Show notification
      </Button>
    </Group>
  )
}
