import s from './QuestionsSection.module.scss'
import Container from "../../../shared/ui-kit/Container"
import Title from "../../../shared/ui-kit/Title"
import QuestionItem from "../../QuestionItem"

export const QuestionsSection = () => {
  return (
    <Container Tag={'section'} wrapperClassName={s.wrapperClassName} containerClassName={s.containerClassName}>
      <span id={'faq'}/>
      <Title tag={'h2'} className={s.title}>
        FAQ
      </Title>
      <QuestionItem isOpen question={'How can I track the status of my order?'} answer={'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.'}/>
      <QuestionItem question={'What payment methods do you accept?'} answer={'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.'}/>
      <QuestionItem question={'How can I return or exchange an item?'} answer={'After placing your order, you will receive a confirmation email containing your order number and a tracking link. You can also log in to your account on our website and go to the "My Orders" section to track your delivery status.'}/>
    </Container>
  )
}
