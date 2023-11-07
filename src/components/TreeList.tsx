import { List, ListItem, ListItemText } from "@mui/material";
import { Tech } from "../types";

const TreeList = ({ tech }: { tech: Tech }) => {
  return (
    <List sx={{ padding: 0 }}>
      {Object.entries(tech).map(([key, value], idx) => {
        let inner = <></>;
        switch (typeof value) {
          case "string":
            inner = (
              <ListItemText
                secondary={value}
                sx={{ paddingTop: 0, paddingBottom: 0 }}
              />
            );
            break;
          case "object":
            if (Array.isArray(value)) {
              inner = (
                <List sx={{ paddingTop: 0, paddingBottom: 0 }}>
                  {value.map((v, idx) => (
                    <ListItem
                      key={idx}
                      alignItems="flex-start"
                      sx={{
                        flexDirection: "column",
                        paddingTop: 0,
                        paddingBottom: 0,
                      }}
                    >
                      <ListItemText
                        secondary={v}
                        sx={{ paddingTop: 0, paddingBottom: 0 }}
                      />
                    </ListItem>
                  ))}
                </List>
              );
            } else {
              inner = (
                <List>
                  {Object.entries(value).map(([k, v], i) => (
                    <ListItem
                      key={i}
                      alignItems="flex-start"
                      sx={{
                        flexDirection: "column",
                        paddingTop: 0,
                        paddingBottom: 0,
                      }}
                    >
                      <ListItemText primary={k} sx={{ paddingBottom: 0 }} />
                      {typeof v === "string" ? (
                        <ListItem
                          alignItems="flex-start"
                          sx={{
                            flexDirection: "column",
                            paddingTop: 0,
                            paddingBottom: 0,
                          }}
                        >
                          <ListItemText
                            secondary={v}
                            sx={{ paddingTop: 0, paddingBottom: 0 }}
                          />
                        </ListItem>
                      ) : (
                        <List>
                          {v.map((s, j) => (
                            <ListItem
                              key={j}
                              alignItems="flex-start"
                              sx={{
                                flexDirection: "column",
                                paddingTop: 0,
                                paddingBottom: 0,
                              }}
                            >
                              <ListItemText
                                secondary={s}
                                sx={{ paddingTop: 0, paddingBottom: 0 }}
                              />
                            </ListItem>
                          ))}
                        </List>
                      )}
                    </ListItem>
                  ))}
                </List>
              );
            }
            break;
        }
        return (
          <ListItem
            key={idx}
            alignItems="flex-start"
            sx={{ flexDirection: "column" }}
          >
            <ListItemText primary={key} />
            {inner}
          </ListItem>
        );
      })}
    </List>
  );
};

export default TreeList;
