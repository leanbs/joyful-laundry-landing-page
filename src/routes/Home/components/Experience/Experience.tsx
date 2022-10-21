import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
} from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons';

const mockdata = [
  {
    title: 'Terlatih dalam bidang kebersihan, tinggal tunggu dirumah Anda.',
    description:
      'Barang anda telah diperiksa dengan hati-hati, dicuci dengan teliti, dan dikembalikan setelah semua proses telah dijalankan.',
    icon: IconGauge,
  },
  {
    title: 'Layanan mengagumkan. Harga yang kompetitif',
    description:
      'Laundry dibedakan per cucian dan sebanding dengan pembersih kualitas tinggi.',
    icon: IconUser,
  },
  {
    title: 'Pembersihan berkualitas tinggi.',
    description:
      'Baju anda akan kami proses dengan baik dan dikembalikan bersih, wangi, siap digunakan.',
    icon: IconCookie,
  },
];

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: '#E0E0E0',
  },
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan('sm')]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
    margin: 'auto',

    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  card: {
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
}));

const Experience = () => {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      p="xl"
    >
      <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} />
      <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text size="sm" color="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));
  return (
    <Container size="lg" py="xl" classNames={classes.root}>
      <Group position="center">
        <Badge variant="filled" size="lg">
          Best laundry ever
        </Badge>
      </Group>

      <Title order={2} className={classes.title} align="center" mt="sm">
        Joyful Laundry
      </Title>

      <Text
        color="dimmed"
        className={classes.description}
        align="center"
        mt="md"
      >
        Every once in a while, you’ll see a Golbat that’s missing some fangs.
        This happens when hunger drives it to try biting a Steel-type Pokémon.
      </Text>

      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: 'md', cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
};

export default Experience;
