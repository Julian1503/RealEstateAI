import {Box, Button, ButtonGroup} from '@mui/material';
import {TabGroupProps} from "@core/Tabs/Tab.types";

export default function TabGroup({ tabs, active, onChange }: TabGroupProps) {
  return (
      <Box sx={{ mb: 2 }}>
        <ButtonGroup variant="outlined">
          {tabs.map((tab) => (
              <Button
                  key={tab}
                  onClick={() => onChange(tab)}
                  variant={active === tab ? 'contained' : 'outlined'}
                  color="primary"
              >
                {tab}
              </Button>
          ))}
        </ButtonGroup>
      </Box>
  );
}