import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemContent from "@mui/joy/ListItemContent";
import Divider from "@mui/material/Divider";

import { formatLog, useLogsStore } from "@/entities/logs";
import { formatUserField } from "@/entities/users";

export const LogsPage = () => {
  const { logs } = useLogsStore();

  const renderLogList = () => {
    if (!logs.length) {
      return <Typography>{"Нет логов"}</Typography>;
    }

    return (
      <List
        dense
        sx={{
          minWidth: "15rem",
          borderRadius: 1,
          width: "100%",
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: "calc(100dvh - 13rem)",
        }}
      >
        {logs.map(({ id, ...log }, index, array) => {
          const isDividerDisplay = index !== array.length - 1;
          const formattedMessage = formatLog({
            ...log,
            newValue: formatUserField(log.newValue),
            oldValue: formatUserField(log.oldValue),
          });

          return (
            <div key={id}>
              <ListItem sx={{ py: 2 }}>
                <ListItemContent sx={{ ml: 2 }}>{formattedMessage}</ListItemContent>
              </ListItem>
              {isDividerDisplay && <Divider />}
            </div>
          );
        })}
      </List>
    );
  };

  return (
    <Box>
      <Typography variant={"h5"} component={"h1"} sx={{ mb: 3 }}>
        {"Логи"}
      </Typography>

      {renderLogList()}
    </Box>
  );
};
