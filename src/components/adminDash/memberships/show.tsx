
import React from "react";
import { useShow, BaseRecord } from "@refinedev/core";
import { Show } from "@refinedev/mui";
import { 
  Typography, 
  Stack, 
  Chip, 
  Grid, 
  Card, 
  CardContent,
  Divider,
  Box 
} from "@mui/material";
import { 
  DirectionsBike, 
  AccessTime, 
  AttachMoney,
  CheckCircle,
  Description 
} from "@mui/icons-material";
import { IMembership } from "@/types/memberships";

export default function MembershipShow() {
  const { queryResult } = useShow<IMembership>();
  const { data, isLoading } = queryResult;
  const record = data?.data;

  return (
    <Show isLoading={isLoading}>
      <Grid container spacing={3}>
        {/* Header Card with Name and Status */}
        <Grid item xs={12}>
          <Card elevation={2}>
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Typography variant="h4" component="h1">
                  {record?.name || "Membresía"}
                </Typography>
                <Chip 
                  label={record?.status === "active" ? "Activo" : "Inactivo"}
                  color={record?.status === "active" ? "success" : "error"}
                  variant="filled"
                  size="large"
                />
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Duration Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Stack spacing={2} alignItems="center">
                <Box 
                  sx={{ 
                    backgroundColor: 'primary.main', 
                    borderRadius: '50%', 
                    p: 1.5,
                    color: 'white'
                  }}
                >
                  <AccessTime fontSize="large" />
                </Box>
                <Stack alignItems="center" spacing={0.5}>
                  <Typography variant="h5" component="div" color="primary">
                    {record?.duration || 0}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    días de duración
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Price Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Stack spacing={2} alignItems="center">
                <Box 
                  sx={{ 
                    backgroundColor: 'success.main', 
                    borderRadius: '50%', 
                    p: 1.5,
                    color: 'white'
                  }}
                >
                  <AttachMoney fontSize="large" />
                </Box>
                <Stack alignItems="center" spacing={0.5}>
                  <Typography variant="h5" component="div" color="success.main">
                    ${record?.price || 0}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    precio total
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Daily Rides Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Stack spacing={2} alignItems="center">
                <Box 
                  sx={{ 
                    backgroundColor: 'info.main', 
                    borderRadius: '50%', 
                    p: 1.5,
                    color: 'white'
                  }}
                >
                  <DirectionsBike fontSize="large" />
                </Box>
                <Stack alignItems="center" spacing={0.5}>
                  <Typography variant="h5" component="div" color="info.main">
                    {record?.maxDailyRides || 0}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    viajes diarios máx.
                  </Typography>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Description Card */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Stack spacing={2}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Description color="primary" />
                  <Typography variant="h6">
                    Descripción
                  </Typography>
                </Stack>
                <Divider />
                <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                  {record?.description || "Esta membresía no tiene descripción disponible."}
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Benefits Card */}
        {record?.benefits && record.benefits.length > 0 && (
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Stack spacing={2}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <CheckCircle color="success" />
                    <Typography variant="h6">
                      Beneficios Incluidos
                    </Typography>
                  </Stack>
                  <Divider />
                  <Stack spacing={1.5}>
                    {record.benefits.map((benefit, index) => (
                      <Stack key={index} direction="row" alignItems="center" spacing={1.5}>
                        <CheckCircle 
                          fontSize="small" 
                          sx={{ color: 'success.main' }} 
                        />
                        <Typography variant="body1" sx={{ flexGrow: 1 }}>
                          {benefit}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        )}

        {/* No Benefits Message */}
        {(!record?.benefits || record.benefits.length === 0) && record && (
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Stack spacing={2}>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <CheckCircle color="disabled" />
                    <Typography variant="h6" color="text.secondary">
                      Beneficios
                    </Typography>
                  </Stack>
                  <Divider />
                  <Typography variant="body1" color="text.secondary">
                    Esta membresía no tiene beneficios específicos listados.
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </Show>
  );
}
