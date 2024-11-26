import { Stack, Button } from "@mui/material";

export function ExtraButtons() {
  const buttonsArray = ["API Docs", "Tools", "Resources", "Pricing"];

  return (
    <Stack direction="row" spacing={2}>
      {buttonsArray.map((button) => (
        <Button key={button} variant="contained">
          {button}
        </Button>
      ))}
    </Stack>
  );
}
