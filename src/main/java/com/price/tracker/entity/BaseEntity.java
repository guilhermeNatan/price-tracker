package com.price.tracker.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.price.tracker.reuse.util.DateUtil;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;
import org.springframework.data.annotation.*;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.persistence.Id;
import javax.persistence.Transient;
import javax.persistence.Version;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.Calendar;

@MappedSuperclass
@Getter
@Setter
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(
        value = {"createAt", "lastUpdate"},
        allowGetters = true
)
public class BaseEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Version
    @ColumnDefault(value = "0")
    private Long version;

    @CreatedDate
    @NotNull
    private Calendar createAt;

    @LastModifiedDate
    @NotNull
    private Calendar lastUpdate;


    @Transient
    public LocalDate getCreateAtInLocalDate()  {
       return DateUtil.convertCalendarToLocalDate(getCreateAt());
    }

    @Transient
    public LocalDate getLastUpdateInLocalDate ()  {
        return DateUtil.convertCalendarToLocalDate(getLastUpdate());
    }
}
