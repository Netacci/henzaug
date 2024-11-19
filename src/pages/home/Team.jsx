import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { teamMembers } from '../../config/team';

const Team = () => {
  return (
    <section id='team' className='pt-20 pb-6'>
      <div className='container mx-auto px-4'>
        <h2 className='text-sm text-orange-500 font-bold uppercase mb-12 text-center'>
          MEET OUR MANAGEMENT TEAM
        </h2>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {teamMembers?.map((member, index) => (
            <Card key={index} className='bg-white shadow-md'>
              <CardHeader>
                <CardTitle>{member.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='font-semibold text-orange-500 mb-2'>
                  {member.title}
                </p>
                <p className='mb-4'>{member.bio}</p>
                <p>{member.bio2}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
